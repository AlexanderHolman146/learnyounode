var aggregatesum = 0

for (var i = 2; i < process.argv.length; i++) {aggregatesum += Number(process.argv[i])}

console.log(aggregatesum)