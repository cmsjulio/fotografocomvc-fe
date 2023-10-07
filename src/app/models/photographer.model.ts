import { Role } from "./role.model";

export class Photographer{
  id?: number;
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
