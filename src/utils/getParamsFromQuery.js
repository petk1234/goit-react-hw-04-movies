import queryString from 'query-string'
export default function getParamsFromQuery(search){
    return queryString.parse(search);
}