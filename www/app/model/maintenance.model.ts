import {Injectable} from '@angular/core';

@Injectable()
export class MaintenanceModel {
    public static mobileIpAddress = '192.168.31.193';
    public ipAddress: string;
    public expenditure = null;

    public getExpenditure() {
        return this.expenditure;
    }

    public setExpenditure( value ): void {
        this.expenditure = value;
    }

    public getIpAddress() {
        return this.ipAddress;
    }

    public setIpAddress( value ): void {
        this.ipAddress = value;
    }
}
