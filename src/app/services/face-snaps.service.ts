import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Paris et sa beauté',
            description: 'La plus belle ville du monde',
            imageUrl: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72',
            createdDate: new Date(),
            snaps: 146,
            location: 'Noisy-le-sec, France'
        },


        {
            id: 2,
            title: 'Saidia, Perle bleue de la Méditerrannée',
            description: 'Ma plage préférée',
            imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c2/e8/36/photo-de-la-plage-de.jpg?w=700&h=-1&s=1',
            createdDate: new Date(),
            snaps: 209,
            location: 'Saidia, Maroc'
        },

        {
            id: 3,
            title: 'Hurghada, station balnéaire ',
            description: 'Ma future destination touristique',
            imageUrl: 'https://cdn.getyourguide.com/img/tour/6082a8491c61d.jpeg/146.jpg',
            createdDate: new Date(),
            snaps: 250,
            location: 'Hurghada, Egypte'
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        }else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

    }

    unsnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }
}