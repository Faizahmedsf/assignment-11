import {Entity, hasOne, model, property} from '@loopback/repository';
import {Customer} from './customer.model';
import {Role} from './role.model';

@model({
  name: 'users'
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  firstname?: string;

  @property({
    type: 'date',
  })
  dob?: string;

  @property({
    type: 'string',
  })
  middlename?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @hasOne(() => Role, {keyTo: 'userid'})
  rolesid: number;

  @hasOne(() => Customer, {keyTo: 'userid'})
  customer: Customer;

  @property({
    type: 'number',
  })
  customerid?: number;

  @property({
    type: 'string',
  })
  password?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
