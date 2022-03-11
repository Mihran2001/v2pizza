export function mapFromArray(data: any[], key = "id") {
  return data.reduce((acc, cur): any => {
    return { ...acc, [cur[key]]: cur };
  }, {});
}
