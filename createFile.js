const fs = require('fs');
export default createFile = (filename,format,data)=>{
    if(format == 'csv'){
        fs.writeFileSync(filename+'.csv',data);
    }else{
        console.log('format not handled.');
    }
}