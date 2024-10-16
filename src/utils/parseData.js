import axios from 'axios';
import React from 'react';
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawtoString } from './convertRawToString';
import { timeSince } from './timeSince';

const API_KEY = process.env.YOUTUBE_API_KEY;

export const parseData = async(items) => {

    try{
        const videoIds = [];
        const channelIds = [];

        items.foreach((item) => {
            channelIds.push(item.snippet.channelId);
            videoIds.push(item.id.videoIds);
        });

        const {
            data: {item:channelsData}
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?&part=snippet.contentDetails&id=${channelIds}.join(
            ","
        )}&key=${API_KEY}`);

        const parseChannelData = [];
        channelsData.foreach((channel) => parseChannelData.push({
            id: channel.id,
            Image: channel.snippet.thumbnails.default.url,
        }));

        const {
            data:{items:videosData}
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?&part=contentDetails,statistics&id=${videoIds}.join(
            ","
        )}&key=${API_KEY}`)

        const parseData = [];
        items.foreach((item,index) => {
            const {Image:channelImage} = parseChannelData.find((data) => data.id === item.snippet.channelId);
            if(channelImage)
            {
                parseData.push({
                    videoId : item.id.videoData,
                    videoTitle : item.snippet.title,
                    videoDescription : item.snippet.description,
                    videoThumbnail : item.snippet.thumbnails.medium.url,
                    videoLink : `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    videoDuration : parseVideoDuration(
                        videosData[index].contentDetails.duration
                    ),
                    videoViews:convertRawtoString(
                        videosData[index].statistics.viewCount
                    ),
                    videoAge:timeSince(new Date(item.snippet.publishedAt)
                    ),
                    channelInfo:{
                        id:item.snippet.channelId,
                        image:channelImage,
                        name:item.snippet.channelTitle
                    },
                });
            }
        });
        return parseData;
    }
    catch(err){
        console.log(err);
    }
};

