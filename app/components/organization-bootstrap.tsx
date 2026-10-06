"use client";

import {
  InviteMembersButton,
  OrganizationSwitcher,
  useAuth,
  useOrganizationList,
  UserButton,
} from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function OrganizationBootstrap() {
  const router = useRouter();
  const { orgId } = useAuth();
  const didBootstrap = useRef(false);
  const { isLoaded, createOrganization, setActive, userMemberships } =
    useOrganizationList({ userMemberships: true });

  useEffect(() => {
    if (
      !isLoaded ||
      orgId ||
      didBootstrap.current ||
      (userMemberships.data?.length ?? 0) > 0
    ) {
      return;
    }

    didBootstrap.current = true;
    void createOrganization({ name: "My organization" })
      .then((organization) => setActive({ organization: organization.id }))
      .then(() => router.refresh())
      .catch((error: unknown) => {
        console.error("Unable to create the default organization.", error);
      });
  }, [
    createOrganization,
    isLoaded,
    orgId,
    router,
    setActive,
    userMemberships.data?.length,
  ]);

  return (
    <div className="flex items-center gap-3">
      <OrganizationSwitcher
        hidePersonal
        afterCreateOrganizationUrl="/workspace"
        afterSelectOrganizationUrl="/workspace"
        afterLeaveOrganizationUrl="/workspace"
      />
      <InviteMembersButton />
      <UserButton />
    </div>
  );
}