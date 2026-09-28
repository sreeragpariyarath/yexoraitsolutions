import { CONTACT_CONTENT } from "../../../data/contact";
import { COMPANY_INFO } from "../../../lib/constants";
import { FIELD_LABEL_CLASS } from "../../ui/FormField";
import { SocialLinks } from "../../ui/SocialLinks";

export function ContactDetails() {
  const { email, address } = COMPANY_INFO;

  return (
    <div className="space-y-10">
      <p className="max-w-xs text-base leading-relaxed text-black/70">{CONTACT_CONTENT.detailsIntro}</p>

      <dl className="space-y-7">
        <div>
          <dt className={FIELD_LABEL_CLASS}>Email</dt>
          <dd className="mt-2">
            <a
              href={`mailto:${email}`}
              className="break-all text-lg font-medium underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111]"
            >
              {email}
            </a>
          </dd>
        </div>

        <div>
          <dt className={FIELD_LABEL_CLASS}>Location</dt>
          <dd className="mt-2 text-lg">
            {address.city}, {address.state}, {address.country}
          </dd>
        </div>

        <div>
          <dt className={FIELD_LABEL_CLASS}>Follow us</dt>
          <dd className="mt-3">
            <SocialLinks iconClassName="size-5" tone="dark" />
          </dd>
        </div>
      </dl>
    </div>
  );
}
