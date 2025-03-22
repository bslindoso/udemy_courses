// import ytdl from 'ytdl-core-discord';
import ytdl from '@distube/ytdl-core';
import fs from 'fs';
import path from 'path';
import os from 'os';

// No Windows, a pasta Downloads fica em "C:\Users\<SeuUsuário>\Downloads"
const downloadsPath = path.join(os.homedir(), 'Downloads');

// URL do vídeo do YouTube que você deseja baixar
const SEU_VIDEO_ID = `bgLKB_vOFWg`;
const videoUrl = `https://www.youtube.com/watch?v=${SEU_VIDEO_ID}`;

// Caminho onde o vídeo será salvo
const outputFilePath = path.resolve(downloadsPath, 'video.mp4');

// Verifica se a URL é válida
ytdl.getInfo(videoUrl).then(info => {
  console.log(`Título do vídeo: ${info.videoDetails.title}`);
  console.log(`Duração: ${info.videoDetails.lengthSeconds} segundos`);


  // Inicia o download do vídeo
  ytdl(videoUrl)
    .pipe(fs.createWriteStream(outputFilePath))
    .on('finish', () => {
      console.log('Download concluído!');
    })
    .on('error', (error) => {
      console.error('Erro ao baixar o vídeo:', error);
    });
}).catch(error => {
  console.error('Erro ao obter informações do vídeo:', error);
});

