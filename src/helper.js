export default class DistrictRepository {
  constructor( data ){
    this.data = data.reduce( (acc, elem) => {
      if(!acc[elem.Location]){
        acc[elem.Location] = {}
      }

      acc[elem.Location][elem.TimeFrame] = {
        TimeFrame: elem.TimeFrame,
        DataFormat: elem.DataFormat,
        Data: elem.Data
      }

      return acc
    }, {} )
  }
}
