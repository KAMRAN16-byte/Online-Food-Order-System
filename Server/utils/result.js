module.exports = (data, err) =>
{
    if (data)
        return {"status": "success", "Data": data};
    return {"status": "failure", "Error": err};
}