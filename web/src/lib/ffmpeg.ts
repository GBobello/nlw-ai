import { FFmpeg } from '@ffmpeg/ffmpeg'

import coreUrl from '../ffmpeg/ffmpeg-core.js?url'
import wasmUrl from '../ffmpeg/ffmpeg-core.wasm?url'
import workerUrl from '../ffmpeg/ffmpeg-worker.js?url'

let ffmpeg: FFmpeg | null

export async function getFFmpeg(){
  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded){
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL
    })
  }

  return ffmpeg
}