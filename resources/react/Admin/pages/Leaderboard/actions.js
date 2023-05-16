const axios = require('axios');

const tag = `Leaderboard Question ::`

export const getLeaderboard = async ({ order, page, id }) => {
  try {
    let url = '/api/v1/leaderboard';
    let { data: { leaderboard } } = await axios.post(url, { order, page, id })

    let pagination = {
      page: leaderboard.page,
      pages: leaderboard.lastPage,
      limit: leaderboard.perPage,
      total: leaderboard.total
    };

    console.log(tag, leaderboard);

    return { leaderboard: leaderboard, pagination }
  } catch (ex) {
    console.error()
  }
}