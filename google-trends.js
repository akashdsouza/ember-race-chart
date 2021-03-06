/* eslint-env node */
const googleTrends = require('google-trends-api');
const fs = require('fs');

(async() => {
  let data = {};
  let results = await googleTrends.autoComplete({ keyword: 'the flash hero' })
  let { default: {
    topics = {}
  } = {} } = JSON.parse(results);
  // eslint-disable-next-line no-unused-vars
  for (let { mid, title } of topics) {
    let topicData = await googleTrends.interestOverTime({
      keyword: mid
    });
    let {
      default: {
        timelineData
      }
    } = JSON.parse(topicData);
    // Just get the last 20 searches data
    if (timelineData.length >= 10) {
      timelineData = timelineData.slice(-10);
    }
    timelineData.forEach((d) => {
      let value = {
        key: title,
        value: d.value[0]
      };
      if (data[d.formattedTime]) {
        data[d.formattedTime].push(value);
      } else {
        data[d.formattedTime] = [value];
      }
    });
  }

  fs.mkdir('tests/dummy/public/assets', {recursive:true}, () => {
    fs.writeFile('tests/dummy/public/assets/sample.json', JSON.stringify(data), 'utf8', () => {});
  })
})();