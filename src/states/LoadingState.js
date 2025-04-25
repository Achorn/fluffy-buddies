import { load } from "../objects/assetLoader";
import State from "./State";

let assetsToLoad = [
  ["albumCover", "../../assets/blok.jpg"],
  ["music", "../../assets/josh-song.mp3"],
];

export default class LoadingState extends State {
  constructor(onLoadComplete) {
    super();
    load(assetsToLoad)
      .catch((error) => {
        throw new TypeError(error);
      })
      .then(() => {
        onLoadComplete();
      });
  }
  update(deltaTime) {}
  draw(ctx) {
    ctx.font = "30px Arial";
    ctx.fillText("Loading...", 100, 100);
  }
}
