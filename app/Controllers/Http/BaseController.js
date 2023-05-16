'use strict'

// Declare Dependency
const log = use('Logger');
const bignum = require('bignum');
const { validateAll } = use('Validator');

//Declare Variables
const tag = `BaseController`;
const mask = bignum("32481138620657517");

class BaseController {

  async respond(response, data){
    return response.status(data.code).send(data.message);
  }

  async validate(request, rules){

    console.log("validate:")
    console.log(request.all())

    const validation = await validateAll(request.all(), rules);

    if (validation.fails()) {
      let ex = {
        code: 422,
        message: validation.messages()
      }
      throw ex;
    }

    return request.all();
  }

  async checkParams(params, parameter_name){
    if(!params[parameter_name]) {
      let exception = {
        message: "Missing parameter: " + parameter_name,
        code: 400
      }
      throw exception;
    } else {
      return params[parameter_name];
    }
  }

  async checkHeader(req, parameter_name){
    if(!req.header(parameter_name.toLowerCase())) {
      let exception = {
        code: 400,
        message: "Header Missing: " + parameter_name,
      }
      throw exception;
    } else {
      return req.header(parameter_name.toLowerCase());
    }
  }

  async base64encode(str){ return new Buffer(str).toString('base64')};
  async base64decode(str){ return (new Buffer(str, 'base64')).toString('utf8')};
  async removeDuplicates(arr){ return arr.map(e => e["id"]).map((e, i, final) => final.indexOf(e) === i && i).filter(e => arr[e]).map(e => arr[e])};
}

module.exports = BaseController
