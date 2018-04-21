export interface Song{
  src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
       artist:string;
       title:string;
       art:string
       preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
}
