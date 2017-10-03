export default class DistrictRepository {
  constructor( data ){
    this.data = data.reduce( (acc, elem) => {
      if(!acc[elem.Location]){
        acc[elem.Location] = {}
      }

      if(!acc[elem.TimeFrame]){
        acc[elem.Location][elem.TimeFrame] = elem;
      }

      return acc
    }, {} )
  }
}
