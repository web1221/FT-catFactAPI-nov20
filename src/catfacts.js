export class CatFacts {
  async getCatFacts(){
    try {
      let response = await fetch(`https://cat-fact.herokuapp.com/facts`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("nah dude:" + error.message);
    }
  }
}
