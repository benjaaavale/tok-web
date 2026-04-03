import { IconPlus as PlusIcon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

const clinicLogos = [
  { name: "Clínica Dental Sonrisa", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/359dbea1aba89fd5e6b1646e870680db3b7831d4d5f7e8219b44d0e03985bb23.png" },
  { name: "Centro Médico Integral", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/1d218b2cedf720fd00f8488e683990e20343704b243d2800d943e2379b8bfffe.png" },
  { name: "Visión Clara", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/de6fcdb2d5d035cd15f4daf00114b3894b7118628b16f89cbacb1a1108be6d42.png" },
  { name: "Blanco Norte", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/289e4eb0d1172434199febb204fdfee2fb1c131377926308ef4eae03a549f227.png" },
  { name: "Velour Clínica Estética", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/095ccf41edea7469476a80a3aa271ed429d62829a55a5124495c01ff16197d38.png" },
  { name: "Raíz Salud", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/5c5e5a9adce33baaedaa661f920bc90afcbe9794e0a5d9893c613454982b2d82.png" },
  { name: "Clínica Dental Sonrisa", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/359dbea1aba89fd5e6b1646e870680db3b7831d4d5f7e8219b44d0e03985bb23.png" },
  { name: "Centro Médico Integral", src: "https://static.prod-images.emergentagent.com/jobs/5de0748f-3bb0-41a9-b522-8d6f839596ca/images/1d218b2cedf720fd00f8488e683990e20343704b243d2800d943e2379b8bfffe.png" },
];

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <LogoCard
        className="relative border-r border-b bg-secondary dark:bg-secondary/30"
        logo={{ src: clinicLogos[0].src, alt: clinicLogos[0].name }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r"
        logo={{ src: clinicLogos[1].src, alt: clinicLogos[1].name }}
      />

      <LogoCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: clinicLogos[2].src, alt: clinicLogos[2].name }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: clinicLogos[3].src, alt: clinicLogos[3].name }}
      />

      <LogoCard
        className="relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: clinicLogos[4].src, alt: clinicLogos[4].name }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: clinicLogos[5].src, alt: clinicLogos[5].name }}
      />

      <LogoCard
        className="border-r"
        logo={{ src: clinicLogos[6].src, alt: clinicLogos[6].name }}
      />

      <LogoCard
        className="bg-secondary dark:bg-secondary/30"
        logo={{ src: clinicLogos[7].src, alt: clinicLogos[7].name }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-10 md:h-12 object-contain select-none opacity-50 dark:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
