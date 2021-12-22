import { useMutation } from "react-query";
import topicApi from "../../api/topicApi";
import { queryClient } from "../../lib/query/queryClient";

export function useRestoreTopic() {
  return useMutation(async (data: any) => await topicApi.restore(data), {
    onSettled: () => {
      queryClient.invalidateQueries("topics");
      queryClient.invalidateQueries("topics-trash");
    }
  });
}