import App from "./app"

const port = +process.env.PORT || 4000
App.listen(port, () => {
  console.log(`Server online and listening on port ${port}`)
})
