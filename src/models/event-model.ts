import type { UserProfileModel } from "./user-model";

export interface EventModel {
	id: number;
	type: number;
	title: string;
	dateInMonth: number;
	start: string;
	end: string;
}

export interface AppointmentModel extends EventModel {
	userProfile?: UserProfileModel;
}
