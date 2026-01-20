/**
 * @author WMXPY
 * @namespace Util
 * @description Client
 */

import axios from "axios";

export const axiosClient = axios.create({
    timeout: 30000,
});
