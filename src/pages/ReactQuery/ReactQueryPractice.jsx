import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getAgents } from "../../api/valorantApi";
import AddAgent from "../../components/ReactQueryPractice/AddAgent";
import ListAllAgents from "../../components/ReactQueryPractice/ListAllAgents";

export default function ReactQueryPractice() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: agents,
  } = useQuery({
    queryKey: ["valorant"],
    queryFn: getAgents,
    select: (agents) => agents.sort((a, b) => b.id - a.id),
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <AddAgent />
      <ListAllAgents />
    </div>
  );
}
