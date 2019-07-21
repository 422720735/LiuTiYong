/**
 * @desc 整合分页列表中的数据
 * @desc 用于处理分页请求中的数据
 * @param prevData {Object} 整合之前的数据
 * @param currentData {Object} 当前引入的数据
 * @return {Object} 整合之后的数据
 */
function mergePagination(prevData, nextData) {
  let pd = prevData.data && Array.isArray(prevData.data) ? prevData.data : []
  let nd = nextData.data && Array.isArray(nextData.data) ? nextData.data : []
  if (prevData && prevData.data && Array.isArray(prevData.data) && prevData.data.length > 0 &&
    nextData && nextData.data && Array.isArray(nextData.data) && nextData.data.length > 0
  ) {
    return {
      count: nextData.count,
      current: nextData.current,
      firstPage: nextData.firstPage,
      lastPage: nextData.lastPage,
      total: nextData.total,
      data: pd.concat(nd)
    }
  } else {
    return {
      count: nextData.count,
      current: nextData.current,
      firstPage: nextData.firstPage,
      lastPage: nextData.lastPage,
      total: nextData.total,
      data: [...pd]
    }
  }
}

export default mergePagination
