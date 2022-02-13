'use strict'

exports.success = (res, data) => {
    const response = {
        'status' : 200,
        'message': data
    }

    res.json(response)
    res.end()
}

exports.filed = (res, statusCode, message) => {
    const response = {
        'status': statusCode,
        'message': message
    }
    res.json(response)
    res.end()
}

// response for nested matakuliah
exports.nestedSuccess = (res, data) => {
    // do akumulasi
    const result = data.reduce((accumulator, currentValue) => {
        // key group
        if(accumulator[currentValue.nama]){
            // create variable name group
            const group = accumulator[currentValue.nama]
            // if array is matakuliah
            if(Array.isArray(group.matakuliah)){
                // add value in to group matakuliah
                group.matakuliah.push(currentValue.matakuliah);
            }else{
                group.matakuliah = [group.matakuliah, currentValue.matakuliah]
            }
        }else{
            accumulator[currentValue.nama] = currentValue
        }
        return accumulator
    },{}) 

    const response = {
        'status': 200,
        'message': data
    }

    res.json(response)
    res.end()

}