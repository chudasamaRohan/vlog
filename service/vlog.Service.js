import dbConnection from "../DB/dbConnection.js";
import fs from 'fs';


export const createVlog = async (uploadData,file) => {
  try {
    const fileName = file.fileName.name
    const filePath =  `vlogs/${fileName}`;

    fs.writeFile(filePath, file.fileName.data, (err) => {
      if (err) {
          console.error('Error writing file:', err);
      } else {
          console.log('File written successfully:', filePath);
      }
  });
     const prepareData = {...uploadData,fileName}
     const vlogData = await dbConnection.Vlogs.create(prepareData)
      return vlogData;
    } catch (error) {
      return error;
    }
  };

  export const vlogList = async () => {
    const vlogData = await dbConnection.Vlogs.findAll()
    if(vlogData && vlogData.length){
      return vlogData
  }else{
      return{
          message:"No vlogs Avilable."
      }
  }
  }

  