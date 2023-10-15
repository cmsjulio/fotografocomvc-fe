import { Location } from './location.model';
import { Role } from './role.model';

export class Photographer {
  id?: string;
  name?: string;
  gender?: string;
  shortInfo?: string;
  bio?: string;
  phone?: string;
  aboutMe?: string;
  roles?: Role[];
  location?: Location;
  profilePicImageId?: string;
}


export class PhotographerUpdate {
  name?: string;
  gender?: string;
  shortInfo?: string;
  bio?: string;
  phone?: string;
  aboutMe?: string;
  locationId?: string;
}
