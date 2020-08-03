class Player {
  constructor(id, token, marker) {
    this.id = id
    this.token = token
    this.wins = []
    this.marker = marker
  }
  saveWinsToStorage() {
    localStorage.setItem(`${this.id}-Wins`, JSON.stringify(this.wins));
  }
  retrieveWinsFromStorage() {
    
  }
}
