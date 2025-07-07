import React, { useState, useRef, useEffect } from 'react';

const mockSongs = [
  {
    id: 's1',
    title: 'Summer Vibes',
    artist: 'Chillwave Collective',
    album: 'Sunset Melodies',
    genre: 'Electronic',
    duration: '3:45',
    imageSrc: 'https://placehold.co/150x150/FF6B6B/FFFFFF?text=Album+1',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 's2',
    title: 'City Lights',
    artist: 'Urban Echoes',
    album: 'Neon Dreams',
    genre: 'Pop',
    duration: '4:10',
    imageSrc: 'https://placehold.co/150x150/4ECDC4/FFFFFF?text=Album+2',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 's3',
    title: 'Forest Whisper',
    artist: 'Nature Sounds',
    album: 'Tranquil Journeys',
    genre: 'Ambient',
    duration: '5:00',
    imageSrc: 'https://placehold.co/150x150/45B8D1/FFFFFF?text=Album+3',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 's4',
    title: 'Rhythmic Pulse',
    artist: 'Beat Masters',
    album: 'Groove Nation',
    genre: 'Hip Hop',
    duration: '3:20',
    imageSrc: 'https://placehold.co/150x150/FFA07A/FFFFFF?text=Album+4',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 's5',
    title: 'Starlight Serenade',
    artist: 'Cosmic Harmonies',
    album: 'Galactic Ballads',
    genre: 'Classical',
    duration: '6:30',
    imageSrc: 'https://placehold.co/150x150/98FB98/FFFFFF?text=Album+5',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: 's6',
    title: 'Electric Dreams',
    artist: 'Synthwave Duo',
    album: 'Retro Future',
    genre: 'Electronic',
    duration: '3:55',
    imageSrc: 'https://placehold.co/150x150/FF8C00/FFFFFF?text=Album+6',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
  {
    id: 's7',
    title: 'Pop Anthem',
    artist: 'Chart Toppers',
    album: 'Hit Parade',
    genre: 'Pop',
    duration: '3:15',
    imageSrc: 'https://placehold.co/150x150/DA70D6/FFFFFF?text=Album+7',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  },
  {
    id: 's8',
    title: 'Zen Garden',
    artist: 'Meditative Minds',
    album: 'Inner Peace',
    genre: 'Ambient',
    duration: '6:00',
    imageSrc: 'https://placehold.co/150x150/8A2BE2/FFFFFF?text=Album+8',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
  },
  {
    id: 's9',
    title: 'Street Rhymes',
    artist: 'Flow State',
    album: 'Concrete Jungle',
    genre: 'Hip Hop',
    duration: '4:00',
    imageSrc: 'https://placehold.co/150x150/00CED1/FFFFFF?text=Album+9',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  },
  {
    id: 's10',
    title: 'Symphony No. 9',
    artist: 'Grand Orchestra',
    album: 'Timeless Classics',
    genre: 'Classical',
    duration: '7:20',
    imageSrc: 'https://placehold.co/150x150/20B2AA/FFFFFF?text=Album+10',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
  {
    id: 's11',
    title: 'Rock Out',
    artist: 'Axe Grinders',
    album: 'Stadium Anthems',
    genre: 'Rock',
    duration: '3:30',
    imageSrc: 'https://placehold.co/150x150/CD5C5C/FFFFFF?text=Album+11',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 's12',
    title: 'Jazz Cafe',
    artist: 'Smooth Grooves',
    album: 'Late Night Sessions',
    genre: 'Jazz',
    duration: '4:40',
    imageSrc: 'https://placehold.co/150x150/F4A460/FFFFFF?text=Album+12',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 's13',
    title: 'Blues Highway',
    artist: 'Delta Kings',
    album: 'Roadside Jams',
    genre: 'Blues',
    duration: '5:10',
    imageSrc: 'https://placehold.co/150x150/D2B48C/FFFFFF?text=Album+13',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 's14',
    title: 'Electro Funk',
    artist: 'Groove Machine',
    album: 'Synth City',
    genre: 'Electronic',
    duration: '4:05',
    imageSrc: 'https://placehold.co/150x150/87CEEB/FFFFFF?text=Album+14',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 's15',
    title: 'Dance Pop',
    artist: 'Rhythm Nation',
    album: 'Club Hits',
    genre: 'Pop',
    duration: '3:00',
    imageSrc: 'https://placehold.co/150x150/FF69B4/FFFFFF?text=Album+15',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: 's16',
    title: 'Deep Meditation',
    artist: 'Inner Sanctum',
    album: 'Mindfulness',
    genre: 'Ambient',
    duration: '7:00',
    imageSrc: 'https://placehold.co/150x150/9370DB/FFFFFF?text=Album+16',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
  {
    id: 's17',
    title: 'Boom Bap',
    artist: 'Old School Crew',
    album: 'Golden Era',
    genre: 'Hip Hop',
    duration: '3:40',
    imageSrc: 'https://placehold.co/150x150/B0E0E6/FFFFFF?text=Album+17',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  },
  {
    id: 's18',
    title: 'Orchestral Suite',
    artist: 'Symphonic Masters',
    album: 'Concert Hall',
    genre: 'Classical',
    duration: '8:10',
    imageSrc: 'https://placehold.co/150x150/ADD8E6/FFFFFF?text=Album+18',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
  },
  {
    id: 's19',
    title: 'Hard Rock Anthem',
    artist: 'Power Chords',
    album: 'Riff City',
    genre: 'Rock',
    duration: '4:20',
    imageSrc: 'https://placehold.co/150x150/FFB6C1/FFFFFF?text=Album+19',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  },
  {
    id: 's20',
    title: 'Smooth Jazz',
    artist: 'Velvet Notes',
    album: 'Lounge Vibes',
    genre: 'Jazz',
    duration: '5:30',
    imageSrc: 'https://placehold.co/150x150/E6E6FA/FFFFFF?text=Album+20',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
  {
    id: 's21',
    title: 'Country Blues',
    artist: 'Dusty Roads',
    album: 'Southern Harmonies',
    genre: 'Blues',
    duration: '4:50',
    imageSrc: 'https://placehold.co/150x150/F0E68C/000000?text=Album+21',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 's22',
    title: 'Future Bass',
    artist: 'Beat Drop',
    album: 'Bass Kingdom',
    genre: 'Electronic',
    duration: '3:35',
    imageSrc: 'https://placehold.co/150x150/90EE90/FFFFFF?text=Album+22',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 's23',
    title: 'Indie Pop',
    artist: 'Dream Weavers',
    album: 'Daydream Nation',
    genre: 'Pop',
    duration: '3:50',
    imageSrc: 'https://placehold.co/150x150/FFDAB9/000000?text=Album+23',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 's24',
    title: 'Chillwave Journey',
    artist: 'Sunset Riders',
    album: 'Coastal Drives',
    genre: 'Ambient',
    duration: '5:45',
    imageSrc: 'https://placehold.co/150x150/B0C4DE/FFFFFF?text=Album+24',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 's25',
    title: 'Trap Banger',
    artist: 'Trap Lords',
    album: 'Street Anthems',
    genre: 'Hip Hop',
    duration: '2:55',
    imageSrc: 'https://placehold.co/150x150/FFDEAD/000000?text=Album+25',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: 's26',
    title: 'Baroque Masterpiece',
    artist: 'Old World Ensemble',
    album: 'Classical',
    genre: 'Classical',
    duration: '6:15',
    imageSrc: 'https://placehold.co/150x150/DDA0DD/FFFFFF?text=Album+26',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
  {
    id: 's27',
    title: 'Punk Rock Riot',
    artist: 'Rebel Yell',
    album: 'Anarchy Now',
    genre: 'Rock',
    duration: '2:40',
    imageSrc: 'https://placehold.co/150x150/F08080/FFFFFF?text=Album+27',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  },
  {
    id: 's28',
    title: 'Bebop Classic',
    artist: 'Jazz Innovators',
    album: 'Cool Cats',
    genre: 'Jazz',
    duration: '4:15',
    imageSrc: 'https://placehold.co/150x150/9ACD32/FFFFFF?text=Album+28',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
  },
  {
    id: 's29',
    title: 'Chicago Blues',
    artist: 'Blues Legends',
    album: 'Windy City Sounds',
    genre: 'Blues',
    duration: '5:05',
    imageSrc: 'https://placehold.co/150x150/8FBC8F/FFFFFF?text=Album+29',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  },
  {
    id: 's30',
    title: 'Synthwave Drive',
    artist: 'Neon Knights',
    album: 'Midnight Cruising',
    genre: 'Electronic',
    duration: '4:30',
    imageSrc: 'https://placehold.co/150x150/6495ED/FFFFFF?text=Album+30',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
  {
    id: 's31',
    title: 'Upbeat Pop',
    artist: 'Pop Starlets',
    album: 'Summer Hits',
    genre: 'Pop',
    duration: '3:05',
    imageSrc: 'https://placehold.co/150x150/FFC0CB/000000?text=Album+31',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 's32',
    title: 'Calm River',
    artist: 'Zen Harmonies',
    album: 'Nature Escapes',
    genre: 'Ambient',
    duration: '6:20',
    imageSrc: 'https://placehold.co/150x150/AFEEEE/000000?text=Album+32',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 's33',
    title: 'Grime Flow',
    artist: 'Underground Beats',
    album: 'Urban Legends',
    genre: 'Hip Hop',
    duration: '3:10',
    imageSrc: 'https://placehold.co/150x150/7FFFD4/000000?text=Album+33',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 's34',
    title: 'Concerto in D',
    artist: 'Maestro Ensemble',
    album: 'Grand Compositions',
    genre: 'Classical',
    duration: '7:50',
    imageSrc: 'https://placehold.co/150x150/F0F8FF/000000?text=Album+34',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 's35',
    title: 'Arena Rock',
    artist: 'Stadium Shakers',
    album: 'Live Energy',
    genre: 'Rock',
    duration: '4:00',
    imageSrc: 'https://placehold.co/150x150/A52A2A/FFFFFF?text=Album+35',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: 's36',
    title: 'Indie Rock Anthem',
    artist: 'Garage Band',
    album: 'Raw Power',
    genre: 'Rock',
    duration: '3:25',
    imageSrc: 'https://placehold.co/150x150/DDA0DD/FFFFFF?text=Album+36',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
  {
    id: 's37',
    title: 'Swing Standard',
    artist: 'Big Band Era',
    album: 'Vintage Jazz',
    genre: 'Jazz',
    duration: '3:55',
    imageSrc: 'https://placehold.co/150x150/BDB76B/000000?text=Album+37',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  },
  {
    id: 's38',
    title: 'Modern Fusion',
    artist: 'Jazz Collective',
    album: 'New Age Jazz',
    genre: 'Jazz',
    duration: '5:00',
    imageSrc: 'https://placehold.co/150x150/FFE4B5/000000?text=Album+38',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
  },
  {
    id: 's39',
    title: 'Swamp Blues',
    artist: 'Bayou Drifters',
    album: 'Deep South',
    genre: 'Blues',
    duration: '4:30',
    imageSrc: 'https://placehold.co/150x150/B0E0E6/000000?text=Album+39',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  },
  {
    id: 's40',
    title: 'Electric Blues Jam',
    artist: 'Bluesbreakers',
    album: 'Live at the Club',
    genre: 'Blues',
    duration: '6:00',
    imageSrc: 'https://placehold.co/150x150/F5DEB3/000000?text=Album+40',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  },
];

const mockAlbums = [
  {
    id: 'a1',
    name: 'Sunset Melodies',
    artist: 'Chillwave Collective',
    year: 2023,
    imageSrc: 'https://placehold.co/200x200/FF6B6B/FFFFFF?text=Sunset+Melodies',
    songs: ['s1', 's6', 's14', 's22', 's30'],
  },
  {
    id: 'a2',
    name: 'Neon Dreams',
    artist: 'Urban Echoes',
    year: 2022,
    imageSrc: 'https://placehold.co/200x200/4ECDC4/FFFFFF?text=Neon+Dreams',
    songs: ['s2', 's7', 's15', 's23', 's31'],
  },
  {
    id: 'a3',
    name: 'Tranquil Journeys',
    artist: 'Nature Sounds',
    year: 2024,
    imageSrc: 'https://placehold.co/200x200/45B8D1/FFFFFF?text=Tranquil+Journeys',
    songs: ['s3', 's8', 's16', 's24', 's32'],
  },
  {
    id: 'a4',
    name: 'Groove Nation',
    artist: 'Beat Masters',
    year: 2021,
    imageSrc: 'https://placehold.co/200x200/FFA07A/FFFFFF?text=Groove+Nation',
    songs: ['s4', 's9', 's17', 's25', 's33'],
  },
  {
    id: 'a5',
    name: 'Galactic Ballads',
    artist: 'Cosmic Harmonies',
    year: 2023,
    imageSrc: 'https://placehold.co/200x200/98FB98/FFFFFF?text=Galactic+Ballads',
    songs: ['s5', 's10', 's18', 's26', 's34'],
  },
  {
    id: 'a6',
    name: 'Retro Future',
    artist: 'Synthwave Duo',
    year: 2020,
    imageSrc: 'https://placehold.co/200x200/FF8C00/FFFFFF?text=Retro+Future',
    songs: ['s6', 's14', 's22', 's30'],
  },
  {
    id: 'a7',
    name: 'Hit Parade',
    artist: 'Chart Toppers',
    year: 2023,
    imageSrc: 'https://placehold.co/200x200/DA70D6/FFFFFF?text=Hit+Parade',
    songs: ['s7', 's15', 's23', 's31'],
  },
  {
    id: 'a8',
    name: 'Inner Peace',
    artist: 'Meditative Minds',
    year: 2022,
    imageSrc: 'https://placehold.co/200x200/8A2BE2/FFFFFF?text=Inner+Peace',
    songs: ['s8', 's16', 's24', 's32'],
  },
  {
    id: 'a9',
    name: 'Concrete Jungle',
    artist: 'Flow State',
    year: 2021,
    imageSrc: 'https://placehold.co/200x200/00CED1/FFFFFF?text=Concrete+Jungle',
    songs: ['s9', 's17', 's25', 's33'],
  },
  {
    id: 'a10',
    name: 'Timeless Classics',
    artist: 'Grand Orchestra',
    year: 2020,
    imageSrc: 'https://placehold.co/200x200/20B2AA/FFFFFF?text=Timeless+Classics',
    songs: ['s10', 's18', 's26', 's34'],
  },
  {
    id: 'a11',
    name: 'Stadium Anthems',
    artist: 'Axe Grinders',
    year: 2022,
    imageSrc: 'https://placehold.co/200x200/CD5C5C/FFFFFF?text=Stadium+Anthems',
    songs: ['s11', 's19', 's27', 's35', 's36'],
  },
  {
    id: 'a12',
    name: 'Late Night Sessions',
    artist: 'Smooth Grooves',
    year: 2021,
    imageSrc: 'https://placehold.co/200x200/F4A460/FFFFFF?text=Late+Night+Sessions',
    songs: ['s12', 's20', 's28', 's37', 's38'],
  },
  {
    id: 'a13',
    name: 'Roadside Jams',
    artist: 'Delta Kings',
    year: 2020,
    imageSrc: 'https://placehold.co/200x200/D2B48C/FFFFFF?text=Roadside+Jams',
    songs: ['s13', 's21', 's29', 's39', 's40'],
  },
];

const mockArtists = [
  {
    id: 'ar1',
    name: 'Chillwave Collective',
    imageSrc: 'https://placehold.co/100x100/FF6B6B/FFFFFF?text=Artist+1',
  },
  {
    id: 'ar2',
    name: 'Urban Echoes',
    imageSrc: 'https://placehold.co/100x100/4ECDC4/FFFFFF?text=Artist+2',
  },
  {
    id: 'ar3',
    name: 'Nature Sounds',
    imageSrc: 'https://placehold.co/100x100/45B8D1/FFFFFF?text=Artist+3',
  },
  {
    id: 'ar4',
    name: 'Beat Masters',
    imageSrc: 'https://placehold.co/100x100/FFA07A/FFFFFF?text=Artist+4',
  },
  {
    id: 'ar5',
    name: 'Cosmic Harmonies',
    imageSrc: 'https://placehold.co/100x100/98FB98/FFFFFF?text=Artist+5',
  },
  {
    id: 'ar6',
    name: 'Synthwave Duo',
    imageSrc: 'https://placehold.co/100x100/FF8C00/FFFFFF?text=Artist+6',
  },
  {
    id: 'ar7',
    name: 'Chart Toppers',
    imageSrc: 'https://placehold.co/100x100/DA70D6/FFFFFF?text=Artist+7',
  },
  {
    id: 'ar8',
    name: 'Meditative Minds',
    imageSrc: 'https://placehold.co/100x100/8A2BE2/FFFFFF?text=Artist+8',
  },
  {
    id: 'ar9',
    name: 'Flow State',
    imageSrc: 'https://placehold.co/100x100/00CED1/FFFFFF?text=Artist+9',
  },
  {
    id: 'ar10',
    name: 'Grand Orchestra',
    imageSrc: 'https://placehold.co/100x100/20B2AA/FFFFFF?text=Artist+10',
  },
  {
    id: 'ar11',
    name: 'Axe Grinders',
    imageSrc: 'https://placehold.co/100x100/CD5C5C/FFFFFF?text=Artist+11',
  },
  {
    id: 'ar12',
    name: 'Smooth Grooves',
    imageSrc: 'https://placehold.co/100x100/F4A460/FFFFFF?text=Artist+12',
  },
  {
    id: 'ar13',
    name: 'Delta Kings',
    imageSrc: 'https://placehold.co/100x100/D2B48C/FFFFFF?text=Artist+13',
  },
];

const mockPlaylists = [
  {
    id: 'p1',
    name: 'My Top Hits',
    description: 'A collection of my all-time favorite songs.',
    imageSrc: 'https://placehold.co/200x200/FFD700/000000?text=Top+Hits',
    songs: ['s1', 's2', 's4', 's7', 's9', 's11', 's14', 's15', 's19', 's22', 's23', 's27'],
  },
  {
    id: 'p2',
    name: 'Workout Jams',
    description: 'High-energy tracks for your workout sessions.',
    imageSrc: 'https://placehold.co/200x200/FF4500/FFFFFF?text=Workout',
    songs: ['s2', 's4', 's6', 's7', 's9', 's11', 's14', 's15', 's17', 's25', 's27', 's33'],
  },
  {
    id: 'p3',
    name: 'Relax & Unwind',
    description: 'Soothing melodies for ultimate relaxation.',
    imageSrc: 'https://placehold.co/200x200/6A5ACD/FFFFFF?text=Relax',
    songs: ['s3', 's5', 's8', 's10', 's12', 's13', 's16', 's18', 's20', 's24', 's28', 's32'],
  },
];

const mockGenres = ['Electronic', 'Pop', 'Ambient', 'Hip Hop', 'Classical', 'Rock', 'Jazz', 'Blues'];

const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const LibraryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
);
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);
const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
);
const SkipBackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" x2="5" y1="19" y2="5"/></svg>
);
const SkipForwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/></svg>
);
const VolumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>
);
const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
);
const DiscIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
);
const ListMusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-music"><path d="M21 15.54V8a2 2 0 0 0-2-2h-7.5l-1.447-2.894A1 1 0 0 0 9.606 2H2v20h8v-8h10.54a2 2 0 0 0 1.9-2.54Z"/><path d="M16 10h-4"/><path d="M10 16H4"/></svg>
);


function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState('home');

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    audio.volume = volume / 100;

    if (currentSong) {
      if (audio.src !== currentSong.audioSrc) {
        audio.src = currentSong.audioSrc;
        audio.load();
      }

      if (isPlaying) {
        audio.play().catch(e => console.error("Error playing audio:", e));
      } else {
        audio.pause();
      }
    } else {
      audio.pause();
      audio.src = '';
    }

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      playNextSong();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSong, isPlaying, volume]);

  const playSong = (song) => {
    if (currentSong && currentSong.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef.current.duration) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const playNextSong = () => {
    if (!currentSong) return;
    const currentIndex = mockSongs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % mockSongs.length;
    playSong(mockSongs[nextIndex]);
  };

  const playPreviousSong = () => {
    if (!currentSong) return;
    const currentIndex = mockSongs.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + mockSongs.length) % mockSongs.length;
    playSong(mockSongs[prevIndex]);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSongs = mockSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlbums = mockAlbums.filter(
    (album) =>
      album.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArtists = mockArtists.filter(
    (artist) => artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderMainContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Good Morning!</h2>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Featured Playlists</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {mockPlaylists.map((playlist) => (
                  <div
                    key={playlist.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                    onClick={() => {}}
                  >
                    <img
                      src={playlist.imageSrc}
                      alt={playlist.name}
                      className="w-full h-auto rounded-md mb-4 shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="text-white text-lg font-semibold truncate">{playlist.name}</h4>
                    <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-white">Recommended Songs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockSongs.slice(0, 3).map((song) => (
                  <div
                    key={song.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                    onClick={() => playSong(song)}
                  >
                    <img
                      src={song.imageSrc}
                      alt={song.album}
                      className="w-16 h-16 rounded-md shadow-md"
                    />
                    <div>
                      <h4 className="text-white text-lg font-semibold truncate">{song.title}</h4>
                      <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                    </div>
                    <button className="ml-auto p-2 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors duration-200">
                      <PlayIcon />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'search':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Search</h2>
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="w-full p-3 mb-6 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {searchTerm && (
              <>
                {filteredSongs.length > 0 && (
                  <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Songs</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {filteredSongs.map((song) => (
                        <div
                          key={song.id}
                          className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                          onClick={() => playSong(song)}
                        >
                          <img
                            src={song.imageSrc}
                            alt={song.album}
                            className="w-16 h-16 rounded-md shadow-md"
                          />
                          <div>
                            <h4 className="text-white text-lg font-semibold truncate">{song.title}</h4>
                            <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                          </div>
                          <button className="ml-auto p-2 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors duration-200">
                            <PlayIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredAlbums.length > 0 && (
                  <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Albums</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {filteredAlbums.map((album) => (
                        <div
                          key={album.id}
                          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                        >
                          <img
                            src={album.imageSrc}
                            alt={album.name}
                            className="w-full h-auto rounded-md mb-4 shadow-md group-hover:scale-105 transition-transform duration-300"
                          />
                          <h4 className="text-white text-lg font-semibold truncate">{album.name}</h4>
                          <p className="text-gray-400 text-sm truncate">{album.artist}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredArtists.length > 0 && (
                  <section className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Artists</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {filteredArtists.map((artist) => (
                        <div
                          key={artist.id}
                          className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                        >
                          <img
                            src={artist.imageSrc}
                            alt={artist.name}
                            className="w-24 h-24 rounded-full mb-4 shadow-md object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <h4 className="text-white text-lg font-semibold truncate">{artist.name}</h4>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {filteredSongs.length === 0 && filteredAlbums.length === 0 && filteredArtists.length === 0 && (
                  <p className="text-gray-400 text-center text-lg">No results found for "{searchTerm}"</p>
                )}
              </>
            )}
            {!searchTerm && (
              <p className="text-gray-400 text-center text-lg">Start typing to search for songs, albums, or artists.</p>
            )}
          </div>
        );
      case 'playlists':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Your Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {mockPlaylists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                  onClick={() => {}}
                >
                  <img
                    src={playlist.imageSrc}
                    alt={playlist.name}
                    className="w-full h-auto rounded-md mb-4 shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="text-white text-lg font-semibold truncate">{playlist.name}</h4>
                  <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'albums':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {mockAlbums.map((album) => (
                <div
                  key={album.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                  onClick={() => {}}
                >
                  <img
                    src={album.imageSrc}
                    alt={album.name}
                    className="w-full h-auto rounded-md mb-4 shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="text-white text-lg font-semibold truncate">{album.name}</h4>
                  <p className="text-gray-400 text-sm truncate">{album.artist}</p>
                  <p className="text-gray-500 text-xs">{album.year}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'genres':
        return (
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Browse Genres</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mockGenres.map((genre, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-600 to-indigo-800 p-4 rounded-lg shadow-lg flex items-center justify-center h-32 text-white font-bold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  style={{
                    backgroundColor: `hsl(${index * 50 % 360}, 70%, 50%)`,
                    backgroundImage: `linear-gradient(to bottom right, hsl(${index * 50 % 360}, 70%, 50%), hsl(${(index * 50 + 30) % 360}, 80%, 30%))`
                  }}
                  onClick={() => {}}
                >
                  {genre}
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-inter">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-black p-6 flex flex-col rounded-tr-xl rounded-br-xl shadow-lg z-10">
          <div className="flex items-center mb-10">
            <MusicIcon className="w-8 h-8 text-green-500 mr-2" />
            <h1 className="text-2xl font-bold text-white">Spotify 2.0</h1>
          </div>

          <nav className="space-y-4">
            <button
              className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 ${
                activeView === 'home' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setActiveView('home')}
            >
              <HomeIcon className="mr-3" />
              Home
            </button>
            <button
              className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 ${
                activeView === 'search' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setActiveView('search')}
            >
              <SearchIcon className="mr-3" />
              Search
            </button>
            <button
              className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 ${
                activeView === 'playlists' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setActiveView('playlists')}
            >
              <ListMusicIcon className="mr-3" />
              Playlists
            </button>
            <button
              className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 ${
                activeView === 'albums' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setActiveView('albums')}
            >
              <DiscIcon className="mr-3" />
              Albums
            </button>
            <button
              className={`flex items-center p-3 rounded-lg w-full text-left transition-colors duration-200 ${
                activeView === 'genres' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setActiveView('genres')}
            >
              <LibraryIcon className="mr-3" />
              Genres
            </button>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-4 pb-24 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <div className="bg-gray-800 rounded-xl shadow-xl min-h-full">
            {renderMainContent()}
          </div>
        </main>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex items-center justify-between shadow-2xl z-20 rounded-t-xl">
        {currentSong ? (
          <div className="flex items-center w-1/4">
            <img
              src={currentSong.imageSrc}
              alt={currentSong.album}
              className="w-14 h-14 rounded-md mr-4 shadow-md"
            />
            <div>
              <h4 className="text-white text-lg font-semibold truncate">{currentSong.title}</h4>
              <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center w-1/4 text-gray-400">
            No song playing
          </div>
        )}

        <div className="flex flex-col items-center w-1/2 px-4">
          <div className="flex items-center space-x-6 mb-2">
            <button
              onClick={playPreviousSong}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-700"
            >
              <SkipBackIcon />
            </button>
            <button
              onClick={togglePlayPause}
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 transform hover:scale-105"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button
              onClick={playNextSong}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-700"
            >
              <SkipForwardIcon />
            </button>
          </div>
          <div className="flex items-center w-full space-x-2">
            <span className="text-xs text-gray-400">{formatTime(audioRef.current.currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <span className="text-xs text-gray-400">{formatTime(audioRef.current.duration)}</span>
          </div>
        </div>

        <div className="flex items-center w-1/4 justify-end space-x-3 pr-4">
          <VolumeIcon className="text-gray-300" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
