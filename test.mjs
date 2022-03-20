import test from 'tape'
import pull from './dist/index.js'

test('import works', t => {
  t.plan(1)

  pull(
    pull.values([1, 2, 3]),
    pull.through(console.log),
    pull.map(n => 2 * n),
    pull.collect((_, result) => {
      t.deepEqual(result, [2, 4, 6])
    })
  )
})
