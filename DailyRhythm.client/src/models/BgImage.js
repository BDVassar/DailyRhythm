export class BgImage {
  constructor(data) {
    this.id = data.id
    this.likes = data.likes
    this.imgLink = data.links.html
    this.imgUrl = data.urls.full
    this.author = data.user.name
  }
}