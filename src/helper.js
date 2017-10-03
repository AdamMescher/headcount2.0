export default class DistrictRepository {
  constructor( data ){
    this.data = data.reduce( (acc, elem, i, arr) => {
      if(!acc[elem.Location]){
        acc[elem.Location] = {
          location: elem.Location,
          data: {},
        }
      }

      if(!acc[elem.Location].data[elem.TimeFrame]){
        acc[elem.Location].data[elem.TimeFrame] =  elem.Data
      }

      return acc
    }, {} )
  }
  findByName(search){

  }

}
