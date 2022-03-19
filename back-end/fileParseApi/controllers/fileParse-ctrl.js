let CNAB = new Object();
let CNAB_ARRAY = [];

function parseStringAndSave(line){
    CNAB['type'] = line.substring(0,1);
    CNAB['date'] = line.substring(1,8);
    CNAB['value'] = line.substring(9,18);
    CNAB['cpf'] = line.substring(19,29);
    CNAB['card'] = line.substring(30,41);
    CNAB['shop_owner'] = line.substring(47,61);
    CNAB['shop_name'] = line.substring(62,80);
    console.log(CNAB);

}

fileParse = async (req, res) => {
    const file_buffer = req.files.file.data;
    const file_ready_to_read = file_buffer.toString();
    let text = file_ready_to_read.split("\n");

    text.forEach(function(x, index) {
        parseStringAndSave(x)
     });
  
    
     
    


 
  
    

    
    
}

module.exports = {
    fileParse
}