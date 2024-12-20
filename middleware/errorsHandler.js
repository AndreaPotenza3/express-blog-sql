function errorsHandler(err, req, res) {
    // console.log(err)
    res.status(500)
    res.json({
        message: err.message,
    })
}

module.exports = errorsHandler