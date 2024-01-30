type FetchWrapperParams = {
  api: (...args: any[]) => Promise<any>
  payload?: any
  onSuccess?: (res: any) => Promise<any> | (() => any)
  onError?: (err: any) => Promise<any> | (() => any)
  options?: {
    throwError: boolean
  }
}

export const fetchWrapper = async ({
  api,
  payload,
  onSuccess,
  onError,
  options,
}: FetchWrapperParams): Promise<any> => {
  const [res, err] = await api(payload)
  if (res) {
    if (onSuccess) await onSuccess(res)
    return res
  }
  if (err) {
    if (onError) await onError(err)
    if (options?.throwError) throw err
    console.log(err)
    return
  }
}
