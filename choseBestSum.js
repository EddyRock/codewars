// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

const ts = [91, 74, 73, 85, 73, 81, 87];

function chooseBestSum(t, k, ls) {
    if(ls.length < k) {
      return null;
    }

    let results = [];
    let result = 0;

    for (let i = 0; i < ls.length; i++) {
      const current = ls[i];
      const array = ls.filter(item => item !== current);
      result = 0;

      result += current;

      for (let t = 0; t < k -1; t++) {
        result += array[t];
      }

      results.push(result);
    }

    console.log(results, k)

    const yy = results
      .map(item => t - item)

    var closest = yy.reduce(function(prev, curr) {
     return (Math.abs(curr - 0) < Math.abs(prev - 0) ? curr : prev);
});

    console.log(results[yy.indexOf(closest)])
}

chooseBestSum(230, 3, ts)