export default class DistrictRepository {
  constructor( data ){
    this.data = data.reduce( (acc, elem, i, arr) => {
      if(!acc[elem.Location]){
        acc[elem.Location.toUpperCase()] = {
          location: elem.Location.toUpperCase(),
          data: {},
        }
      }

      if(!acc[elem.Location.toUpperCase()].data[elem.TimeFrame]){
        if(!isNaN(elem.Data)){
        acc[elem.Location.toUpperCase()].data[elem.TimeFrame] =  Math.round(elem.Data * 1000) / 1000
      } else {
        acc[elem.Location.toUpperCase()].data[elem.TimeFrame] = 0
        }
      }

      return acc
    }, {} )
  }

  findByName(search){
    if(search !== undefined){
      return this.data[search.toUpperCase()];
    }

    return this.data[search]
  }

  findAllMatches(search){
    if(search !== undefined){
      const searchUpperCase = search.toUpperCase()

      const keys = Object.keys(this.data)

      return  keys.filter( (key) => {
        return this.data[key].location.includes(searchUpperCase)
      } )
    }
    else {
      return Object.keys(this.data).map( (elem) => {
        return this.data[elem]
      })
    }
  }

}
