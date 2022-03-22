const db = require('../models/index');
const dev_challenge_utils = require('../utils/dev-challenge-utils');
const FileData = db.fileData;
const { getValueByType } = require('../models/fileData/fileData-repository');

fileParse = async (req, res) => {
    const file_buffer = req.files.file.data;
    const file_ready_to_read = file_buffer.toString();
    let text = file_ready_to_read.split("\n");
   
    try{
        const fileDataArray = dev_challenge_utils.mapLine(text);
        const response = await FileData.bulkCreate(fileDataArray);
        res.json({response:response, err:false});
    }
    catch(err){
        res.json({response:err, err:true});
    }
}

loadParsedData = async (req, res) => {
    try {
        let response = JSON.stringify( await getValueByType(), null, 2 );
        response = JSON.parse(response);
        res.json({response: response, err:false});
    }
    catch(err) {
        res.json({response:err, err:true});
    }  
}

module.exports = {
    fileParse,
    loadParsedData
}