import { ReactComponent as VehiclesIcon } from '../assets/icons/vehicles.svg';
import { ReactComponent as RealEstateIcon } from '../assets/icons/real-estate.svg';
import { ReactComponent as TourismIcon } from '../assets/icons/tourism.svg';
import { ReactComponent as JobsIcon } from '../assets/icons/jobs.svg';
import { ReactComponent as MachinesAndToolsIcon } from '../assets/icons/machines-and-tools.svg';
import { ReactComponent as AllForHomeIcon } from '../assets/icons/all-for-home.svg';
import { ReactComponent as AnimalsIcon } from '../assets/icons/animals.svg';
import { ReactComponent as BoatsIcon } from '../assets/icons/boats.svg';
import { ReactComponent as ClothesAndFootwearsIcon } from '../assets/icons/clothes-and-footwears.svg';
import { ReactComponent as InformaticsIcon } from '../assets/icons/informatics.svg';
import { ReactComponent as ThingsIcon } from '../assets/icons/things.svg';
import { ReactComponent as SportsAndEquipmentsIcon } from '../assets/icons/sports-and-equipments.svg';
import { ReactComponent as ServicesIcon } from '../assets/icons/services.svg';
import { ReactComponent as MobilePhonesIcon } from '../assets/icons/mobile-phones.svg';
import { ReactComponent as AudioVideosPhotosIcon } from '../assets/icons/audio-videos-photos.svg';
import { ReactComponent as OtherIcon } from '../assets/icons/other.svg';
import { ReactComponent as ChildrenWorldIcon } from '../assets/icons/children-world.svg';
import { ReactComponent as DomesticProductsIcon } from '../assets/icons/domestic-products.svg';



export const popularCategoriesIconMapper: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'vehicles.svg': VehiclesIcon,
  'tourism.svg': TourismIcon,
  'machines-and-tools.svg': MachinesAndToolsIcon,
  'real-estate.svg': RealEstateIcon,
  'boats.svg': BoatsIcon,
  'animals.svg': AnimalsIcon,
};

export const categoriesIconMapper: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
    'jobs.svg': JobsIcon,
    'all-for-home.svg': AllForHomeIcon,
    'clothes-and-footwears.svg': ClothesAndFootwearsIcon,
    'informatics.svg': InformaticsIcon,
    'things.svg': ThingsIcon,
    'sports-and-equipments.svg': SportsAndEquipmentsIcon,
    'services.svg': ServicesIcon,
    'mobile-phones.svg': MobilePhonesIcon,
    'audio-videos-photos.svg': AudioVideosPhotosIcon,
    'other.svg': OtherIcon,
    'children-world.svg': ChildrenWorldIcon,
    'domestic-products.svg': DomesticProductsIcon,
  };
