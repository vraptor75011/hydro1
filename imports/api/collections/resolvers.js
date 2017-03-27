import { merge } from 'lodash';
import sitesResolvers from './sites/resolvers';
import usersResolvers from './users/resolvers';

const resolvers = merge(usersResolvers, sitesResolvers);

export default resolvers;