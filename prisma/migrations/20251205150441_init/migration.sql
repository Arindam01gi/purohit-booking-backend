-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firebase_uid` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(20) NULL,
    `role` ENUM('user', 'purohit', 'admin') NOT NULL DEFAULT 'user',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `firebase_uid`(`firebase_uid`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purohits` (
    `user_id` INTEGER NOT NULL,
    `bio` TEXT NULL,
    `city` VARCHAR(100) NOT NULL,
    `rating` DECIMAL(2, 1) NOT NULL DEFAULT 0.0,
    `is_verified` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `duration_minutes` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bookings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `purohit_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `start_time` DATETIME(0) NOT NULL,
    `end_time` DATETIME(0) NOT NULL,
    `location_address` VARCHAR(255) NOT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `status` ENUM('pending', 'confirmed', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `user_id`(`user_id`),
    INDEX `purohit_id`(`purohit_id`),
    INDEX `service_id`(`service_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purohit_availability` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `purohit_id` INTEGER NOT NULL,
    `start_time` DATETIME(0) NOT NULL,
    `end_time` DATETIME(0) NOT NULL,
    `is_available` BOOLEAN NOT NULL DEFAULT true,

    INDEX `purohit_id`(`purohit_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purohit_service_link` (
    `purohit_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,

    PRIMARY KEY (`purohit_id`, `service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `purohits` ADD CONSTRAINT `purohits_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_purohit_id_fkey` FOREIGN KEY (`purohit_id`) REFERENCES `purohits`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purohit_availability` ADD CONSTRAINT `purohit_availability_purohit_id_fkey` FOREIGN KEY (`purohit_id`) REFERENCES `purohits`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purohit_service_link` ADD CONSTRAINT `purohit_service_link_purohit_id_fkey` FOREIGN KEY (`purohit_id`) REFERENCES `purohits`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purohit_service_link` ADD CONSTRAINT `purohit_service_link_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
