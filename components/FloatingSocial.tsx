"use client";

import { Instagram, BriefcaseBusiness } from "lucide-react";

type FloatingSocialProps = {
  instagramUrl: string;
  upworkUrl?: string;
  className?: string;
};

const UPWORK_PROFILE_URL =
  "https://www.upwork.com/freelancers/~01ee1bb3a918bbb0f0?mp_source=share";

export default function FloatingSocial({
  instagramUrl,
  upworkUrl = UPWORK_PROFILE_URL,
  className = "",
}: FloatingSocialProps) {
  const resolvedUpworkUrl = upworkUrl && upworkUrl !== "#" ? upworkUrl : UPWORK_PROFILE_URL;

  return (
    <aside
      className={`floating-social ${className}`.trim()}
      aria-label="Floating social links"
    >
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-social__btn floating-social__btn--instagram"
        aria-label="Instagram"
      >
        <Instagram size={20} aria-hidden="true" />
      </a>

      <a
        href={resolvedUpworkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-social__btn floating-social__btn--upwork"
        aria-label="Upwork"
      >
        <BriefcaseBusiness size={20} aria-hidden="true" />
      </a>
    </aside>
  );
}
