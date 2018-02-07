import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('graphql is amazing!')
})

app.listen(8080, () => console.log('Running server at localhost:8080/graphql'))
