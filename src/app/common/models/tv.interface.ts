import { ColorsTv, ResolutionsTv, SizesTv } from './tv.type';

export interface ITv {
	color: ColorsTv;
	rack: boolean;
	tamanio: SizesTv;
	resolution: ResolutionsTv;
}
