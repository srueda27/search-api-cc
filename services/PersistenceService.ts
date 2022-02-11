import { Op } from "sequelize";
import { sequelize } from "../models";

import { Photos } from "../models/Photos";
sequelize.addModels([Photos]);

class Service {
  public async createPhoto(title: string, photoUrl: string, description: string, shortDescription: string) {
    await Photos.create({ title, photoUrl, description, shortDescription });
  }

  public async getPhotoById(photoId: number): Promise<Photos | null> {
    const photo: Photos | null = await Photos.findOne({
      where: { id: photoId },
      raw: true
    });
    return photo;
  }

  public async getPhotoBySimilarTitle(title: string): Promise<Photos[] | null> {
    const photos: Photos[] | null = await Photos.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`
        }
      },
      raw: true
    });
    return photos;
  }

  public async getPhotos(): Promise<Photos[] | null> {
    const photos: Photos[] | null = await Photos.findAll({
      raw: true
    });
    return photos;
  }
}

export const persistenceService = new Service();
