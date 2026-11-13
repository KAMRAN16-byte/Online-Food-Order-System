module.exports = (data, err) =>
{
    if (data)
        return {"status": "success", "data": data};
    return {"status": "failure", "error": err};
}