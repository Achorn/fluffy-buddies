import { assets } from "../../engine/assetLoader";
import State from "./State";

export default class LevelOne extends State {
  constructor() {
    super();
    this.image = assets.get("albumCover");
    console.log(this.image);
  }
  update(deltaTime) {}
  draw(ctx) {
    ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height);
  }
}
