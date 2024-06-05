import httpServer from "./main"

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, () => {
    console.log(`Server running in ${process.env.ENV} mode on port ${PORT}`)
})
